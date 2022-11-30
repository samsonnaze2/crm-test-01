export default class Datatable {
	pageLimit = 10
	totalPage = 0
	total = 0
	page = 1

	constructor(options) {
		this.id = options.id
	}

	init() {
		this.table = $(`#${this.id}`).DataTable({
			bInfo: false,
			scrollX: true,
			select: true,
			ordering: false,
			paging: false,
		})
		return this.table
	}

	data(data, options) {
		this.page = options.page
		this.total = options.total

		let str_builder = ""
		data.forEach((v, i) => (str_builder += `<tr class="${i % 2 === 0 ? "odd" : "even"}">${options.row(v, i)}</tr>`))
		this.table.destroy()
		document.querySelector(`#${this.id} tbody`).innerHTML = str_builder
		this.init()
		this.makeButtonsPagination(options.total, options.onChange)
		this.makeDropdownPageLength()
	}

	makeButtonsPagination(dataLength, onChange) {
		let str_builder = ""
		this.totalPage = Math.ceil(dataLength / this.pageLimit)
		for (let i = 1; i <= this.totalPage; i++) {
			str_builder += `
                <li class="paginate_button page-item">
                    <a href="javascript:;" aria-controls="${this.id}" data-btn-type="number" data-dt-idx="1" data-value="${i}" tabindex="0" class="page-link">${i}</a>
                </li>`
		}

		document.querySelector(`#${this.id}_wrapper > div.row > div:nth-child(2)`).innerHTML = `
            <div class="dataTables_paginate paging_simple_numbers" id="${this.id}_paginate">
                <ul class="pagination">
                    <li class="paginate_button page-item previous disabled" id="${this.id}_previous">
                        <a href="#javascript:;" aria-controls="${this.id}" data-btn-type="previous" data-dt-idx="0" tabindex="0" class="page-link">
                            <i class="previous"></i>
                        </a>
                    </li>
                    ${str_builder}
                    <li class="paginate_button page-item next disabled" id="${this.id}_next">
                        <a href="javascript:;" aria-controls="${this.id}" data-btn-type="next" data-dt-idx="2" tabindex="0" class="page-link">
                            <i class="next"></i>
                        </a>
                    </li>
                </ul>
            </div>`

		const elements = document.querySelectorAll(`[aria-controls=${this.id}]`)

		for (let i = 0; i < elements.length; i++) {
			elements[i].addEventListener("click", (e) => {
				if (e.target.getAttribute("data-btn-type") === "number") {
					this.onClickPage(parseInt(e.target.getAttribute("data-value")), onChange)
				} else if (e.target.getAttribute("data-btn-type") === "previous") {
					this.onClickPage(this.page - 1, onChange)
				} else if (e.target.getAttribute("data-btn-type") === "next") {
					this.onClickPage(this.page + 1, onChange)
				} else {
					if (e.target.tagName === "I") {
						if (e.target.parentElement.getAttribute("data-btn-type") === "previous") {
							this.onClickPage(this.page - 1, onChange)
						} else if (e.target.parentElement.getAttribute("data-btn-type") === "next") {
							this.onClickPage(this.page + 1, onChange)
						}
					}
				}
			})
		}

		this.onClickPage(1, null)
	}

	onClickPage(page, onChange) {
		this.page = parseInt(page)

		const elements = document.querySelectorAll(`[aria-controls=${this.id}]`)
		elements.forEach((element) => element.parentElement.classList.remove("active"))
		elements.forEach((element) => {
			if (
				element.getAttribute("data-btn-type") === "number" &&
				element.getAttribute("data-value") === page.toString()
			) {
				element.parentElement.classList.add("active")
			}
		})

		if (this.totalPage === 1) {
			document.getElementById(`${this.id}_previous`).classList.add("disabled")
			document.getElementById(`${this.id}_next`).classList.add("disabled")
		} else {
			if (this.page === this.totalPage) {
				document.getElementById(`${this.id}_previous`).classList.remove("disabled")
				document.getElementById(`${this.id}_next`).classList.add("disabled")
			} else if (this.page === 1) {
				document.getElementById(`${this.id}_previous`).classList.add("disabled")
				document.getElementById(`${this.id}_next`).classList.remove("disabled")
			} else {
				document.getElementById(`${this.id}_previous`).classList.remove("disabled")
				document.getElementById(`${this.id}_next`).classList.remove("disabled")
			}
		}

		if (onChange) {
			onChange(this.page, this.pageLimit, this.totalPage, this.total)
		}
	}

	makeDropdownPageLength() {
		document.querySelector(`#${this.id}_wrapper > div.row > div:nth-child(1)`).innerHTML = `
            <div class="dataTables_length" id="${this.id}_length">
                <label>
                    <select name="${this.id}_length" aria-controls="${
			this.id
		}" class="form-select form-select-sm form-select-solid">
                        ${this.makeDataTableLengthOptions()}
                    </select>
                </label>
            </div>`
	}

	makeDataTableLengthOptions() {
		return `<option value="10">10</option><option value="25">25</option><option value="50">50</option><option value="100">100</option>`
	}
}
