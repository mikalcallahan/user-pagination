import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core'
import { range, not, isNil, or } from 'ramda'
import { Pagination } from 'src/app/models'

interface Page {
  value: number
  label: string
  isEnabled: boolean
  class?: string
  isActive?: boolean
}

@Component({
  selector: 'paging',
  templateUrl: 'paging.component.html',
  styleUrls: ['paging.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PagingComponent implements OnChanges {
  @Input() public paging: Pagination
  @Input() public currPage: number
  @Input() public numPagesToShow: number = 5
  @Output() public changePage: EventEmitter<number>

  public shouldRender: boolean
  public pages: Page[]

  constructor() {
    this.changePage = new EventEmitter(true)
  }

  ngOnChanges(): void {
    this.pages = this._generatePages(
      this.paging?.total,
      this.paging?.per_page,
      this.paging?.page,
      this.numPagesToShow
    )
    this.shouldRender =
      this.calculateTotalPages(this.paging?.total, this.paging?.per_page) > 1
  }

  public selectPage(page: number): void {
    if (not(isNil(page))) {
      this.changePage.emit(page)
    }
  }

  public isButtonDisabled(page: Page): boolean {
    return or(page.isActive, not(page.isEnabled))
  }

  private _getPageRange(
    currPage: number,
    totalPages: number,
    numPagesToShow: number
  ): number[] {
    const offset = Math.floor(numPagesToShow / 2)

    const lowerBound = Math.max(1, currPage - offset)
    const upperBound = Math.min(totalPages, currPage + offset)

    if (lowerBound === 1) {
      return range(1, Math.min(totalPages, numPagesToShow) + 1)
    } else if (upperBound === totalPages) {
      return range(Math.max(1, upperBound - numPagesToShow), upperBound + 1)
    } else {
      return range(lowerBound, upperBound + 1)
    }
  }

  private calculateTotalPages(count: number, limit: number): number {
    return Math.ceil(count / limit)
  }

  private _generatePages(
    count: number,
    limit: number,
    currentPage: number,
    numPagesToShow: number
  ): Page[] {
    const totalPages = this.calculateTotalPages(count, limit)
    const pageRange = this._getPageRange(
      this.paging?.page,
      totalPages,
      this.numPagesToShow
    )

    const nextPage = {
      value: currentPage < totalPages ? currentPage + 1 : undefined,
      label: 'Next Page',
      isEnabled: currentPage < totalPages,
      isActive: false,
      icon: 'angle-right',
      class: 'next-page',
    }

    const prevPage = {
      value: currentPage > 1 ? currentPage - 1 : undefined,
      label: 'Prev Page',
      isEnabled: currentPage > 1,
      isActive: false,
      icon: 'angle-left',
      class: 'prev-page',
    }

    const numberedPages = pageRange.map((pageNumber) => {
      return {
        value: pageNumber,
        label: pageNumber.toString(),
        isEnabled: true,
        isActive: pageNumber === currentPage,
      }
    })

    return [prevPage, ...numberedPages, nextPage]
  }
}
