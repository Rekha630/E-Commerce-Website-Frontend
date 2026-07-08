import "./Categories.css";

function Categories() {
  const categories = [
    {
      name: "Men",
      image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=300",
    },
    {
      name: "Women",
      image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300",
    },
    {
      name: "Electronics",
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300",
    },
    {
      name: "Groceries",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=300",
    },
  ];

  return (
    <section className="categories">
      <h2>Shop by Category</h2>

      <div className="category-grid">
        {categories.map((item, index) => (
          <div className="category-card" key={index}>
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Categories;