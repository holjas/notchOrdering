const Filters = ({ vendors, handleSelect }) => {
  return (
    <section className='wrapper'>
      <p>Supplier</p>
      <label htmlFor='sortByList' className='sr-only'>
        sort supplier by
      </label>
      <select name='sortByList' id='sortByList' onChange={handleSelect}>
        <option value='allSuppliers' defaultValue>
          All Suppliers
        </option>
        {/* dropdown menu populated with all supplies */}
        {vendors &&
          vendors.map((vendor) => {
            return (
              <option value={vendor.vendorName} key={vendor.id}>
                {vendor.vendorName}
              </option>
            );
          })}
      </select>
      <button onClick={handleSelect} value='allSuppliers'>
        Reset Filters
      </button>
    </section>
  );
};

export default Filters;
