import React from 'react';

function ProductSection() {
  return (
    <section id="products" className="py-12 bg-white">
      <div className="container mx-auto text-center mb-8">
        <h2 className="text-2xl font-semibold">Our Products</h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {/* Product Card 1 */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
          <img src="https://havepura.com/wp-content/uploads/2023/07/Chocolate-Milk.png" alt="Chocolate Milk" className="w-full h-auto" />
          <h4 className="text-lg mt-2">Chocolate Milk</h4>
          <p className="text-center text-xl">Rs. 35.00</p>
        </div>
        {/* Product Card 2 */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
          <img src="https://havepura.com/wp-content/uploads/2023/07/Rose-Milk.webp" alt="Rose Milk" className="w-full h-auto" />
          <h4 className="text-lg mt-2">Rose Milk</h4>
          <p className="text-center text-xl">Rs. 35.00</p>
        </div>
        {/* Product Card 3 */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
          <img src="https://havepura.com/wp-content/uploads/2023/07/Badam-Milk.png" alt="Badam Milk" className="w-full h-auto" />
          <h4 className="text-lg mt-2">Badam Milk</h4>
          <p className="text-center text-xl">Rs. 35.00</p>
        </div>
        {/* Product Card 4 */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
          <img src="https://havepura.com/wp-content/uploads/2023/07/ghee.webp" alt="Ghee (200ml)" className="w-full h-auto" />
          <h4 className="text-lg mt-2">Ghee (200ml)</h4>
          <p className="text-center text-xl">Rs. 160.00</p>
        </div>
        {/* Product Card 5 */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
          <img src="https://havepura.com/wp-content/uploads/2023/07/ghee.webp" alt="Ghee (500ml)" className="w-full h-auto" />
          <h4 className="text-lg mt-2">Ghee (500ml)</h4>
          <p className="text-center text-xl">Rs. 380.00</p>
        </div>
        {/* Product Card 6 */}
        <div className="bg-gray-200 p-4 rounded-lg shadow-lg">
          <img src="https://havepura.com/wp-content/uploads/2023/07/ghee.webp" alt="Ghee (1Lt)" className="w-full h-auto" />
          <h4 className="text-lg mt-2">Ghee (1Lt)</h4>
          <p className="text-center text-xl">Rs. 760.00</p>
        </div>
      </div>
    </section>
  );
}

export default ProductSection;
