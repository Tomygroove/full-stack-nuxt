export default({app}, inject) => {
    inject('addToCart', (product) => {
            if(process.browser){
            let card = JSON.parse(localStorage.getItem('shopCart')) || [];
            }
            let productObject = {
                id: this.product.id,
                title: this.product.title,
                price: this.product.price,
                qty: 1
            }

            let indexOfExistingProduct = card.findIndex(
                (el) => el.id === productObject.id
            );
            
            if(indexOfExistingProduct !== -1) {
                card[indexOfExistingProduct].qty += 1
            }
            else {
                card.push(productObject)
            }

            return    localStorage.setItem('shopCart', JSON.stringify(card));
    }),
    inject('clearCart', () => {
        localStorage.removeItem('shopCart');
    }),
    inject('removeItemCart', (product) => {
        let card = JSON.parse(localStorage.getItem('shopCart'));
        const filteredCard = card.filter((item) => {
            return item.id !== product.id
        })
       return localStorage.setItem('shopCart', JSON.stringify(filteredCard));
    }),
    inject('addOneQty', (product) => {
       let card = JSON.parse(localStorage.getItem('shopCart')) || [];
       let productObject = {
           id: product.id,
           title: product.title,
           price: product.price,
           qty: 1
       }

       let indexOfExistingProduct = card.findIndex(
           (el) => el.id === productObject.id
       );
       if(indexOfExistingProduct !== -1) {
           card[indexOfExistingProduct].qty += 1
       }
      return localStorage.setItem('shopCart', JSON.stringify(card));
    }),
    inject('removeOneQty', (product) => {
        if (product.qty > 1) {
            let card = JSON.parse(localStorage.getItem('shopCart')) || [];
        let productObject = {
            id: product.id,
            title: product.title,
            price: product.price,
            qty: 1
        }

        let indexOfExistingProduct = card.findIndex(
            (el) => el.id === productObject.id
        );
        
        if(indexOfExistingProduct !== -1) {
            card[indexOfExistingProduct].qty -= 1
        }

       return localStorage.setItem('shopCart', JSON.stringify(card));
        }
        
    }),
    inject('getCart', () => {
        if(process.browser){

        let card = JSON.parse(localStorage.getItem('shopCart'));
        return card;
        }

           
    }),
    inject('getCartTotal', (card) => {
        let total = card.reduce((total, item) => total + item.price * item.qty, 0)
            return total;
    }),
    inject('getCartCount', (card) => {
        let count = card.reduce((total, item) => total + item.qty, 0);
            return count;
    }),
    inject('getCartFav', () => {
        if(process.browser){
        let card = JSON.parse(localStorage.getItem('shopCartFav'));
        return card;
        }
            
    })

}