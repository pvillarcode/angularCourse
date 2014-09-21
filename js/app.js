(function(){
    var app = angular.module('store',['store-product']);
    
    app.controller('StoreController', function(){
        this.products = gems;
    });
    
    
    app.controller('ReviewController', function() {
        this.review = {};
        
        this.addReview = function(product){
            product.reviews.push(this.review);
            this.review = {};
        }
    });
    
    
    
    var gems = [
        {
            name: 'Dodecahedron',
            price: 23.95,
            description: '...'    ,
            canPurchase: true,
            soldOut:true,
            images: [
                {
                    full:'img/full.jpg',
                    thumb:'img/thumb.jpg'
                }            
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this product",
                    author: "joe@thomas" 
                },
                {
                    stars: 3,
                    body: "wena loco",
                    author: "amier@gasppars" 
                }, 
                {
                    stars: 6,
                    body: "Martillo asdf",
                    author: "ojde@sapar" 
                }
            ]
        },
        {
            name: 'Item 2',
            price: 232.95,
            description: '...'    ,
            canPurchase: false,
            soldOut:true,
            images: [
                {
                    full:'img/ic_launcher.png',
                    thumb:'img/thumb.jpg'
                }            
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this product",
                    author: "joe@thomas" 
                },
                {
                    stars: 3,
                    body: "wena loco",
                    author: "amier@gasppars" 
                }, 
                {
                    stars: 6,
                    body: "Martillo asdf",
                    author: "ojde@sapar" 
                }
            ]
        },
        {
            name: 'Item 3',
            price: 244.95,
            description: '...'    ,
            canPurchase: true,
            soldOut:true,
            images: [
                {
                    full:'img/full.jpg',
                    thumb:'img/thumb.jpg'
                }            
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this product",
                    author: "joe@thomas" 
                },
                {
                    stars: 3,
                    body: "wena loco",
                    author: "amier@gasppars" 
                }, 
                {
                    stars: 6,
                    body: "Martillo asdf",
                    author: "ojde@sapar" 
                }
            ]
        }
    ]
    
})();
