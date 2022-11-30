import Datatable from "../../helper/datatables"
import { AdminClosePositionHistoryService } from "./services"

class AdminClosePositionHistoryPageController {
	constructor(options) {
		this.table = options.table
		this.service = options.service
	}

	initElements() {
		this.table.init()
	}

	reload() {
		this.loadDataTable()
	}

	loadDataTable() {
		const dataList = this.service.getData()
		this.table.data(dataList.data, {
			page: dataList.page,
			total: dataList.total,
			onChange: (page, pageLimit, totalPage, total) => {
				console.log({ page, pageLimit, totalPage, total })
			},
			row: (data, _) => `
                <td>${data.position_id}</td>
                <td>${data.account_number}</td>
                <td>${data.open_time}</td>
                <td>${data.type}</td>
                <td>${data.volume}</td>
                <td>${data.symbol}</td>
                <td>${data.open_price}</td>
                <td>${data.tp}</td>
                <td>${data.sl}</td>
                <td>${data.close_time}</td>
                <td>${data.close_price}</td>
                <td>${data.commission}</td>
                <td>${data.swap}</td>
                <td>${data.profit}</td>
                <td>${data.raw_spread}</td>
                <td>${data.markup_spread}</td>`,
		})
	}
}

const instanceTable = new Datatable({ id: "table-admin-close-position-history" })
const instanceService = new AdminClosePositionHistoryService()
const controller = new AdminClosePositionHistoryPageController({
	table: instanceTable,
	service: instanceService,
})

document.addEventListener("DOMContentLoaded", () => {
	controller.initElements()
})

document.getElementById("btn-clear").addEventListener("click", () => {
	controller.loadDataTable()
})
