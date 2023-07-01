import $ from 'jquery'

export default class BottomTable {
    constructor() {
        $('#btn-minimize-route').on('click', (e) => {
            e.preventDefault()
            this.small()
        })

        $('#btn-detailed-route').on('click', (e) => {
            e.preventDefault()

            if ($('#bottom-table').hasClass('medium')) {
                this.small()
                $('#btn-detailed-route img').attr('src', './assets/icons/up-arrow.svg')
            } else {
                this.medium()
                $('#btn-detailed-route img').attr('src', './assets/icons/down-arrow.svg')
            }
        })

        $('#btn-fullscreen-route').on('click', (e) => {
            e.preventDefault()

            if ($('#bottom-table').hasClass('fullscreen')) {
                this.medium()
                $('#btn-fullscreen-route img').attr('src', './assets/icons/fullscreen.svg')
            } else {
                this.fullscreen()
                $('#btn-fullscreen-route img').attr('src', './assets/icons/exit-fullscreen.svg')
            }
        })
    }

    hide() {
        $('#bottom-table').hide()
    }

    small() {
        $('#bottom-table').removeClass().addClass('small')
        $('#bottom-table').show()

        $('#btn-fullscreen-route img').attr('src', './assets/icons/fullscreen.svg')
    }

    medium() {
        $('#bottom-table').removeClass().addClass('medium')
        $('#bottom-table').show()

        $('#btn-fullscreen-route img').attr('src', './assets/icons/fullscreen.svg')
    }

    large() {
        $('#bottom-table').removeClass().addClass('fullscreen')
        $('#bottom-table').show()
    }

    fullscreen() {
        $('#bottom-table').removeClass().addClass('fullscreen')
        $('#bottom-table').show()
    }
}