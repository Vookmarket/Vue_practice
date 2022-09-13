const app = Vue.createApp({
    data: function () {
        return {
            // サムネイルリストの配列
            thumbnails: [
                {
                    id: 1,
                    src: "img/cat.png"
                },
                {
                    id: 2,
                    src: "img/dog.png"
                }
            ],
            selectedThumbnailId: undefined,// 選択したサムネイルID
            isVisible: false,// 表示状態 trueなら表示、falseなら非表示
            thumbnailHeight: 0,// モーダルないのサムネイルの高さ
            isThumbnailLoaded: false,// サムネイルが読み込み完了したかどうか
        }
    },
    watch: {
        // サムネイルが選択・変更されたらサムネイルの読み込み状態を読み込み中にする
        selectedThumbnailId: function () {
            this.isThumbnailLoaded = false;
        },
    },
    computed: {
        // 現在表示中のサムネイルオブジェクト
        currentThumbnail: function () {
            const self = this
            return _.find(self.thumbnails, function (thumb) {
                return thumb.id === self.selectedThumbnailId;
            })
        },
        containerStyle: function () {
            return {
                height: this.thumbnailHeight + "px"
            }
        }
    },
    methods: {
        // モーダルを開く
        // モーダルを開くためのメソッドを@clickのイベントハンドラとして定義する
        openModal: function (thumb) {
            // クリックしたサムネイルの情報を確認する
            console.log(thumb);
            this.isVisible = truethis.selectedThumbnailId = thumb.id
        },
        onLoad: function () {
            this.thumbnailHeight = 
                event.target.naturalHeight > 300 ? 300 :
                event.target.naruralHeight
            this.isThumbnailLoaded = true;
        },

    }
}).mount("#app") //Vueアプリケーションをマウントする要素