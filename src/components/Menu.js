import React from "react";
import recipes from '../recipes';
import Swal from "sweetalert2";

const Menu = () => {

    const handleOrder = (id) => {
        console.log(id, "id is clicked");
        Swal.fire({
            title: "Do you want to order this item?",
            text: "This item will be ordered once you confirm.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#495E57",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, I want to order!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Ordered!",
                text: "Your order has been confirmed!",
                icon: "success"
              });
            }
          });
    }

    return (
        <div className='menu-container'>
            <div className='menu-header'>
                <h2>Our Specials!</h2>
                <button>Online Menu</button>
            </div>
            <div className='cards'>
                {
                    recipes.map(recipe => <div key={recipe.id} className='menu-items'>
                        <img src={recipe.image} alt=''/>
                        <div className='menu-content'>
                            <div className='heading'>
                                <h5>{recipe.title}</h5>
                                <p>{recipe.price}</p>
                            </div>
                            <p>{recipe.description}</p>
                            <button className='orderbtn' onClick={() => handleOrder(recipe.id)}>Order a delivery</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Menu;