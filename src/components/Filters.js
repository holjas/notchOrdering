const Filters = ({ vendors, handleSelect }) => {
  return (
    <section className='filterSection'>
      <div className='wrapper'>
        {/* dropdown menu populated with all of the suppliers/vendors */}
        <p>Supplier</p>
        <label htmlFor='sortByList' className='sr-only'>
          sort supplier by name, select from dropdown
        </label>
        <select name='sortByList' id='sortByList' onChange={handleSelect}>
          <option value='allSuppliers' defaultValue>
            All Suppliers
          </option>
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
      </div>
    </section>
  );
};

export default Filters;
