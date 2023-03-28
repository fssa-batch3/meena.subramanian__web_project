# Kaithari 
My project is an e-commerce website (Kaithari)

Sonarcloud :https://sonarcloud.io/summary/new_code?id=fssa-batch3_meena.subramanian__web_project;

Documentation:https://docs.google.com/document/d/1SY5oMnrNV9ZAFU8paUDbzOnmwYM8PGL1/edit;

User flow: https://drive.google.com/drive/folders/1s4pqzZvDE42ZA8bx_DT0HHggSgrvIsfQ;

Wire frame: https://drive.google.com/drive/folders/1s4pqzZvDE42ZA8bx_DT0HHggSgrvIsfQ;

<!-- 
1.Register CRUD

    Create user profile
  
    Read user profile
  
    Update user profile
  
    delete user profile


2.Product CRUD

    Create product
   
    Read  product
    
    Update product
    
    Delete product
    
    Product detail
    
    Add and Remove product list


3.Add to cart

    Creat Product cart
    
    Read product cart
    
    Update product cart

    Delete product cart


4.Whishlist

     Creat Product list
    
    Read product list
    
    Update product list

    Delete product list


5.Seller CRUD

    Profile create

    Profile delete

    Profile read

    Profile delete -->


E-COMMERCE

BUYER:

CREATE AN ACCOUNT : ( COMPLETD )
* Scenario 1: Successfully created an account
    * Steps :
        1. Navigate to the sign-up page.
        2. Fill the required details such as name, phone number and they created the password.
        3. Click the "Submit" button.
    * Expected result :
        * The user is redirected to the login page.

CREATE AN ACCOUNT : ( COMPLETD )
* Scenario 1: Successfully logged in to your account
    * steps :
        1. Navigate to the login page.
        2. Fill the required informations such as phone number and password.
        3. Click the "Submit" button.
    * Expected result :
        * The user is redirected to the home page.

VIEW PROFILE :
* Scenario 1: Create a profile
    * steps :
        1. Login as a user.
        2. Navigate to the profile page.
        3. View the user details such as name and phone number.
    * Expected result :
        * The user can view their profile.
        
EDIT PROFILE :
* Scenario 1: Edit the profile
    * steps :
        1. Login as a user.
        2. Navigate to the profile page.
        3. Click edit button.
        4. Update the user details.
        5. Click "Save" button to save the details.
    * Expected result :
        * The details of the user has been updated.

VIEW PRODUCTS/ITEMS : ( COMPLETD )
* Scenario 1: Successfully view products/items
    * Steps :
        1. Login as a buyer.
        2. Navigate to the product listing page.
        3. View the list of available products/items.
    * Expected result :
        * The user can view the list of available products/items.

VIEW PRODUCT/ITEM DETAIL : ( COMPLETD )
* Scenario 1: Successfully view product/item details
    * Steps:
        1. Login as a buyer.
        2. Navigate to the product listing page.
        3. Select a view button to view its details.
    * Expected result:
        * The user can view the details of the selected product/item.

BUY A PRODUCT/ITEM : ( NOT YET STARTED )
* Scenario 1: Successfully purchase a product/item
    * Steps :
        1. Login as a buyer.
        2. Navigate to the product listing page.
        3. Select a product/item to view its details.
        4. Click the "Buy Now" button.
        5. Confirm the shipping address and payment method.
        6. Click the "Place Order" button.
    * Expected result:
        * An order confirmation message is sent to the user's phone number.
        * The product/item's stock is reduced by the purchased quantity.

ADD PRODUCT/ITEM TO THE CART : ( COMPLETD )
* Scenario 1: Successfully add product/item to cart
    * Steps :
        1. Login as a buyer.
        2. Navigate to the product listing page.
        3. Select a product/item to view its details..
        4. Click the "Add to Cart" button.
    * Expected result:
        *  If you want check the product means go to the cart page.
        * The product/item is added to the user's cart.

VIEW PRODUCTS/ITEMS IN THE CART : ( COMPLETD )
* Scenario 1: Successfully view products/items in cart
    * Steps :
        1. Login as a buyer.
        2. Navigate to the cart page.
        3. View the list of items in the cart.
    * Expected result:
        * The user can view the list of items in the cart.


REMOVE PRODUCTS/ITEMS FROM THE CART : ( COMPLETD )
* Scenario 1: Successfully remove item from cart
    * Steps:
        1. Login as a buyer.
        2. Navigate to the cart page.
        3. Remove the selected item from the cart.
        4. Click the "Delete" button to remove the selected item.
    * Expected result:
        * The item is removed from the user's cart.
        
ADD PRODUCT/ITEM TO THE WISHLIST : ( COMPLETD )
* Scenario 1: Successfully add product/item to the wishlist
    * Steps :
        1. Login as a buyer.
        2. Navigate to the productlist page.
        3. Select the product/item to view its details.
        4. Click the "Wishlist" button to add the product to the wishlist.
    * Expected result :
        *  If you want check the product means go to the whishlist page.
        * The product/item is added to the wishlist.
       

REMOVE PRODUCT/ITEM FROM THE WISHLIST : ( COMPLETD )
* Scenario 1: Remove the product/item from the wishlist
    * steps :
        1. Login as a buyer.
        2. Navigate to the wishlist page.
        3. Remove the selected item from the cart.
        4. Click the "Delete" icon to remove the selected item.
    * Expected Result:
        * The item is removed from the user's wishlist.

SELLER :

CREATE AN ACCOUNT :( COMPLETD )
* Scenario 1: Successfully created an account
    * Steps :
        1. Navigate to the sign-up page.
        2. Fill the required details such as name, phone number and they created the password.
        3. Click the "Submit" button.
    * Expected result :
        * The user is redirected to the login page.

CREATE AN ACCOUNT : ( COMPLETD )
* Scenario 1: Successfully logged in to your account
    * steps :
        1. Navigate to the login page.
        2. Fill the required informations such as phone number and password.
        3. Click the "Submit" button.
    * Expected result :
        * The user is redirected to the seller product list page.

VIEW SELLER PROFILE :( COMPLETED )
* Scenario 1: Create a profile
    * steps :
        1. Login as a user.
        2. Navigate to the profile page.
        3. View the user details such as name and phone number.
    * Expected result :
        * The user can view their profile.

EDIT SELLER PROFILE :( COMPLETED )
* Scenario 1: Edit the profile
    * steps :
        1. Login as a user.
        2. Navigate to the profile page.
        3. Click edit button.
        4. Update the user details.
        5. Click "Save" button to save the details.
    * Expected result :
        * The details of the user has been updated.


UPLOAD NEW PRODUCT TO SELL :  ( COMPLETD )
* Scenario 1: Successfully uploaded the new product
    * Steps :
        1. Login as a seller.
        2. Navigate to the My products page to upload the new product/item.
        3. Click "create New" button to upload the new product/item.
        4. Enter the required product/item details such as name, price, description, offer, catagory and Image URL.
        5. Click the "Upload" button to upload the new product.
    * Expected result :
         * The new product is created and added to the seller's product list page.


    VIEW THE LIST OF PRODUCTS :  ( COMPLETD )
* Scenario 1: Successfully view list of products
    * Steps :
        1. Login as a seller.
        2. Navigate to the productlist page.
        3. View the list of products.
    * Expected result :
        * The seller can view the list of products.


    VIEW THE DETAILS OF PRODUCTS :  ( COMPLETD )
* Scenario 1: Successfully view details of products
    * Steps :
        1. Login as a seller.
        2. Navigate to the productlist page.
        3. Click the product/Item to go to the product details page.
        4. View the Details of products.
    * Expected result :
        * The seller can view the Details of products.


EDIT THE PRODUCT DETAILS :( COMPLETD )
* Scenario 1: Successfully edit the product details
    * Steps :
        1. Login as a seller.
        2. Navigate to the products page.
        3. Select a product to edit.
        4. Click the "Edit" button.
        5. Update the product details.
        6. Click the "Save" button to update the product details.
    * Expected result:
        * The product details are updated.


DELETE THE PRODUCT :  ( COMPLETED )
* Scenario 1: Update: Successfully deleted the product
    * Steps :
        1. Login as a seller.
        2. Navigate to the products page.
        3. Click the "Edit" button.
        4. Select the product to delete.
        5. Click the "Delete" button to delete the selected product.
    * Expected result :
        * The product is deleted from the products page.


REMOVE PRODUCT FOR THE USER SIDE :  ( COMPLETED )
* Scenario 1: Successfully remove the product from the user side
    * Steps :
        1. Login as a seller.
        2. Navigate to the products page.
        3. Select the product to remove.
        4. Click "Remove" button to remove the product from the user side.
    * Expected result :
        * The selected product is removed from the user side.

ADD PRODUCT TO THE USER SIDE :  ( COMPLETED )
* Scenario 1: Successfully added the product to the user side
    * Steps :
        1. Login as the seller.
        2. Navigate to the products page.
        3. Click "Add" button to add the selected product to the user side.
    * Expected result :
        * The selected product is added to the user side.

VIEW LIST OF ORDERS :  ( NOT YET STARTED )
* Scenario 1: Successfully view list of orders
    * Steps:
        1. Login as a seller.
        2. Navigate to the orders page.
        3. View the list of orders.
    * Expected result:
        * The seller can view the list of orders.


VIEW ORDER DETAILS :  ( NOT YET STARTED )
* Scenario 1: Successfully view order details
    * Steps:
        1. Login as a seller.
        2. Navigate to the orders page.
        3. Select an order to view.
        4. Click the "View Order" button.
    * Expected Result:
        * The seller can view the details of the selected order.
