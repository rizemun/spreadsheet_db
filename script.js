const dbConnect = {
    init() {
        this.cache();
        this.events();
        this.getExp();
    },

    cache() {
        this.settings= {
            url: 'https://script.google.com/macros/s/AKfycbzpRaCqfY1q4evUC1ZXfqK99QYjGE0IL5GJumtIkPpsBdlEIpk/exec',
            buttonSelector: '#olala',
        };

        this.$btn = $(this.settings.buttonSelector);
    },

    events() {
        this.$btn.on('click', () => {
            console.log(1);
            this.getExp()
        })
    },

    getExp() {
        this.$btn.prop('disabled', true);
        $.getJSON(this.settings.url, data => {
            this.$btn.prop('disabled', false);
            this.$btn.html(data.olala[0]);
        });
    }
};


$(() => dbConnect.init());