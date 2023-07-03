import $ from 'jquery'

export default class Modal {
    constructor(element) {
        this.modal = $(`#${element}`)
    }

    show() {
        $('.modal').removeClass('show')
        this.modal.addClass('show')
    }

    hide() {
        this.modal.removeClass('show')
    }
}