const shoppingCart = document.getElementById("shopping-cart");
const items = shoppingCart.getElementsByClassName("item");
const totalPrice = document.getElementById("total-price");

let total = 0;

for (let i = 0; i < items.length; i++) {
  const item = items[i];
  const minusBtn = item.getElementsByClassName("minus-btn")[0];
  const plusBtn = item.getElementsByClassName("plus-btn")[0];
  const quantityInput = item.getElementsByTagName("input")[0];
  const deleteBtn = item.getElementsByClassName("delete-btn")[0];
  const likeBtn = item.getElementsByClassName("like-btn")[0];
  const price = parseInt(
    item.getElementsByClassName("price")[0].innerText.substring(1)
  );

  minusBtn.addEventListener("click", () => {
    if (quantityInput.value > 1) {
      quantityInput.value--;
      total -= price;
      totalPrice.innerText = `Total Price: $${total}`;
    }
  });

  plusBtn.addEventListener("click", () => {
    quantityInput.value++;
    total += price;
    totalPrice.innerText = `Total Price: $${total}`;
  });

  deleteBtn.addEventListener("click", () => {
    item.remove();
    total -= price * quantityInput.value;
    totalPrice.innerText = `Total Price: $${total}`;
  });

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("liked");
  });

  total += price * quantityInput.value;
}

totalPrice.innerText = `Total Price: $${total}`;
