const productCrud = JSON.parse(localStorage.getItem("product_crud"));
if (!productCrud) {
  localStorage.setItem(
    "product_crud",
    JSON.stringify([
      [
        {
          "uppic": "https://iili.io/HNNdX3v.jpg",
          "productname": "Kanjivaram Saree",
          "productprice": "7000",
          "discountprice": 6510,
          "productreview": "Silk Saree",
          "descrip": "Silk sarees are crafted from silk fabric, which is known for its lustrous appearance and smooth texture. Silk sarees are considered luxurious and are often associated with special occasions, festivals, and weddings. They come in various types, such as Banarasi silk, Kanjivaram silk, Mysore silk.",
          "productoffer": "7",
          "product_uuid": "789967b4-b89f-4df8-b496-ffb66702af0d",
          "seller_id": "vasumeena2004@gmail.com",
          "Quantity": 12,
          "Jarigai": "Gold Plated",
          "Design_Name": "Normal Barder design",
          "selectedValue": "5.5 Meter"
        },
        {
          "uppic": "https://iili.io/HNWFdAX.jpg",
          "productname": "Chanderi sari",
          "productprice": "6000",
          "discountprice": 5520,
          "productreview": "Silk Saree",
          "descrip": "Silk sarees are crafted from silk fabric, which is known for its lustrous appearance and smooth texture. Silk sarees are considered luxurious and are often associated with special occasions, festivals, and weddings. They come in various types, such as Banarasi silk, Kanjivaram silk.",
          "productoffer": "8",
          "product_uuid": "0dc2d305-ebd0-4975-b75c-b21fa0a4a5ba",
          "seller_id": "vasumeena2004@gmail.com",
          "Quantity": "8",
          "Jarigai": "Copper plated ",
          "Design_Name": "Malaithuli Design",
          "selectedValue": "5.5 Meter"
        },
        {
          "uppic": "https://iili.io/HNWf7aV.jpg",
          "productname": "Bomkai sari",
          "productprice": "15000",
          "discountprice": 12750,
          "productreview": "Silk Saree",
          "descrip": "Silk sarees are crafted from silk fabric, which is known for its lustrous appearance and smooth texture. Silk sarees are considered luxurious and are often associated with special occasions, festivals, and weddings. They come in various types, such as Banarasi silk, Kanjivaram silk",
          "productoffer": "15",
          "product_uuid": "e32d802b-7950-4106-bf7b-51e8a2bcfefc",
          "seller_id": "vasumeena2004@gmail.com",
          "Quantity": "25",
          "Jarigai": "Gold plated.",
          "Design_Name": "Normal Design",
          "selectedValue": "5.5 Meter"
        },
        {
          "uppic": "https://iili.io/HrGoWu9.jpg",
          "productname": "Banarasi sari",
          "productprice": "5000",
          "discountprice": 4750,
          "productreview": "Pumpar Cotton Saree",
          "descrip": "Cotton sarees are made from cotton fabric, which is lightweight, breathable, and comfortable to wear. These sarees are known for their versatility and are suitable for various occasions, ranging from casual wear to formal events. Cotton sarees come in a wide range of colors, patterns, and designs, catering to different tastes and preferences..",
          "productoffer": "5",
          "product_uuid": "419504c1-9a79-4fdd-8520-860cdccf08d4",
          "seller_id": "vasumeena2004@gmail.com",
          "Quantity": "8",
          "Jarigai": "Gold and Technic model. ",
          "Design_Name": "Selppu Design.",
          "selectedValue": "8.2 Meter"
        },
        {
          "uppic": "https://iili.io/HNNd68l.jpg",
          "productname": "Patola saree",
          "productprice": "7000",
          "discountprice": 6300,
          "productreview": "Pumpar Cotton Saree",
          "descrip": "Cotton sarees are made from cotton fabric, which is lightweight, breathable, and comfortable to wear. These sarees are known for their versatility and are suitable for various occasions, ranging from casual wear to formal events. Cotton sarees come in a wide range of colors, patterns, and designs, catering to different tastes and preferences.",
          "productoffer": "10",
          "product_uuid": "50b66ddf-9cc1-4760-bc8a-f04cc2640bfb",
          "seller_id": "vasumeena2004@gmail.com",
          "Quantity": "8",
          "Jarigai": "Mayil Design Jarigai",
          "Design_Name": "Normal Design",
          "selectedValue": "5.5 Meter"
        },
        {
          "uppic": "https://iili.io/HNNHKns.jpg",
          "productname": "Dhakai saree",
          "productprice": "8000",
          "discountprice": 7120,
          "productreview": "Pumpar Cotton Saree",
          "descrip": "Cotton sarees are made from cotton fabric, which is lightweight, breathable, and comfortable to wear. These sarees are known for their versatility and are suitable for various occasions, ranging from casual wear to formal events. Cotton sarees come in a wide range of colors, patterns, and designs, catering to different tastes and preferences.",
          "productoffer": "11",
          "product_uuid": "6a2e4baf-37fb-4e16-ad72-615a7482aca2",
          "seller_id": "vasumeena2004@gmail.com",
          "Quantity": "9",
          "Jarigai": "Maanga Design with flower",
          "Design_Name": "Normal Design",
          "selectedValue": "5.5 Meter"
        },
        {
          "uppic": "https://iili.io/HNNKRoP.jpg",
          "productname": "Kache Dhoti",
          "productprice": "1500",
          "discountprice": 1440,
          "productreview": "Dhoti",
          "descrip": "Pure handloom white color dhoti with gold striped border. Traditional wear for weddings and religious festivals. The wedding dresses capture the grace, elegance, and edge of the sophisticated modern Look. The fine quality of Cotton yarns used makes the wearer feel more comfortable",
          "productoffer": "4",
          "product_uuid": "981132d6-87ce-4701-b6fc-9c8fa3a0776d",
          "seller_id": "vasumeena2004@gmail.com",
          "Quantity": "25",
          "Jarigai": "Gold color.",
          "Design_Name": "Stripes Border.",
          "selectedValue": "5.5 Meter"
        },
        {
          "uppic": "https://iili.io/HNTk8wQ.jpg",
          "productname": "Tamil Veshti Dhoti",
          "productprice": "1500",
          "discountprice": 1365,
          "productreview": "Dhoti",
          "descrip": "Pure handloom white color dhoti with gold striped border. Traditional wear for weddings and religious festivals. The wedding dresses capture the grace, elegance, and edge of the sophisticated modern Look. The fine quality of Cotton yarns used makes the wearer feel more comfortable.",
          "productoffer": "9",
          "product_uuid": "cc93e959-0754-46bf-bc25-3fda8ce0aa1d",
          "seller_id": "vasumeena2004@gmail.com",
          "Quantity": "15",
          "Jarigai": "Gold plated",
          "Design_Name": " Gold Striped Dhoti",
          "selectedValue": "8.2 Meter"
        },
        {
          "uppic": "https://iili.io/HNTvJln.jpg",
          "productname": "Dulangi Dhoti",
          "productprice": "1000",
          "discountprice": 950,
          "productreview": "Dhoti",
          "descrip": "Pure handloom white color dhoti with pink striped border. Traditional wear for weddings and religious festivals. The wedding dresses capture the grace, elegance, and edge of the sophisticated modern Look. The fine quality of Cotton yarns used makes the wearer feel more comfortable.",
          "productoffer": "5",
          "product_uuid": "68b3e734-c05d-40c3-a9e3-b6c04c8763e1",
          "seller_id": "vasumeena2004@gmail.com",
          "Quantity": "10",
          "Jarigai": "No use Jarigai",
          "Design_Name": "Normal line Design",
          "selectedValue": "5.5 Meter"
        }
      ]
    ])
  );
}

const addProducts = JSON.parse(localStorage.getItem("add_products"));
if (!addProducts) {
  localStorage.setItem(
    "add_products",
    JSON.stringify([
        "789967b4-b89f-4df8-b496-ffb66702af0d",
        "0dc2d305-ebd0-4975-b75c-b21fa0a4a5ba",
        "e32d802b-7950-4106-bf7b-51e8a2bcfefc",
        "419504c1-9a79-4fdd-8520-860cdccf08d4",
        "50b66ddf-9cc1-4760-bc8a-f04cc2640bfb",
        "6a2e4baf-37fb-4e16-ad72-615a7482aca2",
        "981132d6-87ce-4701-b6fc-9c8fa3a0776d",
        "cc93e959-0754-46bf-bc25-3fda8ce0aa1d",
        "68b3e734-c05d-40c3-a9e3-b6c04c8763e1"
    ])
  );
}









