export default class Datatable {
	pageLimit = 10

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
		let str_builder = ""
		data.forEach(
			(data, i) => (str_builder += `<tr class="${i % 2 === 0 ? "odd" : "even"}">${options.row(data, i)}</tr>`)
		)
		this.table.destroy()
		document.querySelector(`#${this.id} tbody`).innerHTML = str_builder
		this.init()
		this.makeButtonsPagination(data.length)
		this.makeDropdownPageLength()
	}

	makeButtonsPagination(dataLength) {
		let str_builder = ""
		const max = Math.ceil(dataLength / this.pageLimit)
		for (let i = 1; i <= max; i++) {
			str_builder += `
                <li class="paginate_button page-item ${i === 1 ? "active" : ""}">
                    <a href="#" aria-controls="${this.id}" data-dt-idx="${i}" tabindex="0" class="page-link">${i}</a>
                </li>`
		}
		document.querySelector(`#${this.id}_wrapper > div.row > div:nth-child(2)`).innerHTML = `
            <div class="dataTables_paginate paging_simple_numbers" id="${this.id}_paginate">
                <ul class="pagination">
                    <li class="paginate_button page-item previous disabled" id="${this.id}_previous">
                        <a href="#" aria-controls="${this.id}" data-dt-idx="0" tabindex="0" class="page-link">
                            <i class="previous"></i>
                        </a>
                    </li>
                    ${str_builder}
                    <li class="paginate_button page-item next disabled" id="${this.id}_next">
                        <a href="#" aria-controls="${this.id}" data-dt-idx="2" tabindex="0" class="page-link">
                            <i class="next"></i>
                        </a>
                    </li>
                </ul>
            </div>`
	}

	makeDropdownPageLength() {
		document.querySelector(`#${this.id}_wrapper > div.row > div:nth-child(1)`).innerHTML = `
            <div class="dataTables_length" id="${this.id}_length">
                <label>
                    <select name="${this.id}_length" aria-controls="${this.id}" class="form-select form-select-sm form-select-solid">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </label>
            </div>`
	}
}
