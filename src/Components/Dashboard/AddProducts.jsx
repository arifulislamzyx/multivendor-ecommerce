// import { headers } from "next/headers";

const AddProducts = () => {
  //   const handleSummit = (e) => {
  //     e.preventDefault();

  //     const form = e.target;
  //     const name = form.productName.value;
  //     const category = form.category.value;
  //     const price = form.price.value;
  //     const stock = form.stock.value;
  //     const imageFile = files.imageFile.value;

  //     console.log(name, category, price, stock, imageFile);
  //     const newProductData = { name, category, price, stock };

  //     fetch("https://lazy-lime-seahorse-wrap.cyclic.app/products", {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify(newProductData),
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data))
  //       .catch((err) => console.log(err));
  //   };

  return (
    <form>
      <div className="border w-full h-[500px] p-4">
        <h1>Please Add Your Items </h1>
        <div className="grid grid-cols-2 gap-4 p-3 mt-10 ">
          <input
            type="text"
            name="productName"
            placeholder="Product Name"
            className="rounded p-4 mr-2"
          />
          <input
            type="text"
            name="category"
            placeholder="Category"
            className="rounded p-4 mr-2"
          />
          <input
            type="text"
            name="price"
            placeholder="Price"
            className="rounded p-4 mr-2"
          />
          <input
            type="text"
            name="stock"
            placeholder="Stock"
            className="rounded p-4 mr-2"
          />
        </div>
        <input
          type="file"
          name="file"
          id=""
          placeholder="Choose Image"
          className="rounded bg-slate-300 p-3 w-full ml-2"
        />
        <button
          type="submit"
          name="imageFile"
          className="p-2 bg-blue-600 text-white rounded ml-2 mt-2"
        >
          Add Product
        </button>
      </div>
    </form>
  );
};

export default AddProducts;
