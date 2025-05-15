import React from "react";

const FilterBar = ({
  searchTerm,
  onSearchChange,
  statusFilter,
  onStatusChange,
  statusOptions = [],
  placeholder = "Search...",
  onAddClick,
  addButtonLabel = "Add",
}) => {
  return (
    <div style={styles.container}>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder={placeholder}
        style={styles.searchInput}
      />

      <select
        value={statusFilter}
        onChange={(e) => onStatusChange(e.target.value)}
        style={styles.dropdown}
      >
        {statusOptions.map((status) => (
          <option key={status} value={status}>
            {status}
          </option>
        ))}
      </select>

      {onAddClick && (
        <button style={styles.addButton} onClick={onAddClick}>
          + {addButtonLabel}
        </button>
      )}
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    marginBottom: "16px",
  },
  searchInput: {
    padding: "8px",
    width: "250px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  dropdown: {
    padding: "8px",
    borderRadius: "4px",
    border: "1px solid #ccc",
  },
  addButton: {
    padding: "8px 14px",
    backgroundColor: "#10b981",
    border: "none",
    borderRadius: "5px",
    color: "#fff",
    cursor: "pointer",
  },
};

export default FilterBar;
