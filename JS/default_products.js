if (localStorage.getItem("product_crud")) {
    return
}
else {
    localStorage.setItem("product_crud", JSON.stringify(
        [
            { "uppic": "https://iili.io/HNwvmns.jpg", "productname": "kanchipuram saree", "productprice": " 15000", "discountprice": 13500, "productreview": "Saree", "descrip": "Special PriceGet extra 5% off (price inclusive of cashback/coupon)T&C.  Bank Offer10% instant discount on SBI Credit Card, up to ₹750 on orders of ₹2,500 and aboveT&C.  Bank OfferFlat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm accountT&C.  Bank Offer10% instant discount on IDFC FIRST Credit Card EMI Trxns, up to ₹3000 on orders of ₹5,000 and aboveT&C.", "productoffer": "10", "product_uuid": "ac8bacb2-d21b-4a75-b3f7-891d8a5ff042", "seller_id": "sess@gmail.com" },
            { "uppic": "https://iili.io/HNw8ESp.jpg", "productname": "Silk saree", "productprice": "16000", "discountprice": 13600, "productreview": "Saree", "descrip": "Special PriceGet extra 5% off (price inclusive of cashback/coupon)T&C.  Bank Offer10% instant discount on SBI Credit Card, up to ₹750 on orders of ₹2,500 and aboveT&C.  Bank OfferFlat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm accountT&C.  Bank Offer10% instant discount on IDFC FIRST Credit Card EMI Trxns, up to ₹3000 on orders of ₹5,000 and aboveT&C.", "productoffer": "15", "product_uuid": "f469e475-ea9d-4af8-8247-955b156f575a", "seller_id": "sess@gmail.com" },
            { "uppic": "https://iili.io/HNws6zl.jpg", "productname": "Banarash Saree", "productprice": "8000", "discountprice": 7600, "productreview": "Saree", "descrip": "Special PriceGet extra 5% off (price inclusive of cashback/coupon)T&C.  Bank Offer10% instant discount on SBI Credit Card, up to ₹750 on orders of ₹2,500 and aboveT&C.  Bank OfferFlat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm accountT&C.  Bank Offer10% instant discount on IDFC FIRST Credit Card EMI Trxns, up to ₹3000 on orders of ₹5,000 and aboveT&C.", "productoffer": "5", "product_uuid": "32d97c49-1082-40ae-8162-c77349fdfa51", "seller_id": "sess@gmail.com" },
            { "uppic": "https://iili.io/HNNdX3v.jpg", "productname": "Bomkai Saree", "productprice": " 15000", "discountprice": 12750, "productreview": "Saree", "descrip": "Special PriceGet extra 5% off (price inclusive of cashback/coupon)T&C.  Bank Offer10% instant discount on SBI Credit Card, up to ₹750 on orders of ₹2,500 and aboveT&C.  Bank OfferFlat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm accountT&C.  Bank Offer10% instant discount on IDFC FIRST Credit Card EMI Trxns, up to ₹3000 on orders of ₹5,000 and aboveT&C.", "productoffer": "15", "product_uuid": "243340c1-e469-48cb-8c28-4e64c3cfe879", "seller_id": "sess@gmail.com" },
            { "uppic": "https://iili.io/HNNd68l.jpg", "productname": "Chikankari Saree", "productprice": "8000", "discountprice": 6640, "productreview": "Saree", "descrip": "Special PriceGet extra 5% off (price inclusive of cashback/coupon)T&C.  Bank Offer10% instant discount on SBI Credit Card, up to ₹750 on orders of ₹2,500 and aboveT&C.  Bank OfferFlat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm accountT&C.  Bank Offer10% instant discount on IDFC FIRST Credit Card EMI Trxns, up to ₹3000 on orders of ₹5,000 and aboveT&C.", "productoffer": "17", "product_uuid": "d16296f2-9a2b-44f9-84b1-28084685b0e5", "seller_id": "sess@gmail.com" },
            { "uppic": "https://iili.io/HNN3YzP.jpg", "productname": "Panche Dhoti", "productprice": " 2000", "discountprice": 1900, "productreview": "Dhoti", "descrip": "Special PriceGet extra 5% off (price inclusive of cashback/coupon)T&C.  Bank Offer10% instant discount on SBI Credit Card, up to ₹750 on orders of ₹2,500 and aboveT&C.  Bank OfferFlat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm accountT&C.  Bank Offer10% instant discount on IDFC FIRST Credit Card EMI Trxns, up to ₹3000 on orders of ₹5,000 and aboveT&C.", "productoffer": "5", "product_uuid": "893c51b0-1a00-4364-8227-d15d3879fd65", "seller_id": "sess@gmail.com" },
            { "uppic": "https://iili.io/HNNKRoP.jpg", "productname": "Kaavi Dhoti", "productprice": "800", "discountprice": 760, "productreview": "Dhoti", "descrip": "Special PriceGet extra 5% off (price inclusive of cashback/coupon)T&C.  Bank Offer10% instant discount on SBI Credit Card, up to ₹750 on orders of ₹2,500 and aboveT&C.  Bank OfferFlat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm accountT&C.  Bank Offer10% instant discount on IDFC FIRST Credit Card EMI Trxns, up to ₹3000 on orders of ₹5,000 and aboveT&C.", "productoffer": "5", "product_uuid": "82f15712-c0d1-453c-84c3-b9de02417293", "seller_id": "sess@gmail.com" },
            { "uppic": "https://iili.io/HNNquG1.webp", "productname": "Ottikko Kttiko", "productprice": "1500", "discountprice": 1350, "productreview": "Dhoti", "descrip": "Special PriceGet extra 5% off (price inclusive of cashback/coupon)T&C.  Bank Offer10% instant discount on SBI Credit Card, up to ₹750 on orders of ₹2,500 and aboveT&C.  Bank OfferFlat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm accountT&C.  Bank Offer10% instant discount on IDFC FIRST Credit Card EMI Trxns, up to ₹3000 on orders of ₹5,000 and aboveT&C.", "productoffer": "10", "product_uuid": "b74865e5-5bb1-4048-8fc2-24109a79dc1a", "seller_id": "sess@gmail.com" },
            { "uppic": "https://iili.io/HNOEOsS.jpg", "productname": "Cotton saree", "productprice": "8000", "discountprice": 7200, "productreview": "Saree", "descrip": "Special PriceGet extra 5% off (price inclusive of cashback/coupon)T&C.  Bank Offer10% instant discount on SBI Credit Card, up to ₹750 on orders of ₹2,500 and aboveT&C.  Bank OfferFlat ₹100 Instant Cashback on Paytm Wallet. Min Order Value ₹1000. Valid once per Paytm accountT&C.  Bank Offer10% instant discount on IDFC FIRST Credit Card EMI Trxns, up to ₹3000 on orders of ₹5,000 and aboveT&C.", "productoffer": "10", "product_uuid": "7b2d4c8a-f749-42ba-ad37-e04a30f820c2", "seller_id": "sess@gmail.com" }
        ]
    ))
}


s