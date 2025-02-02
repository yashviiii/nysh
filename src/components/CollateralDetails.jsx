import { useState } from "react";

export const CollateralDetails = () => {
  const [collaterals, setCollaterals] = useState([{ type: "", value: "", ownership: "", description: "" }]);

  const collateralTypes = [
    "Residential Property",
    "Commercial Property",
    "Factory",
    "Land",
    "Plant & Machinery",
    "Inventory",
    "Fixed Deposits",
    "Other",
  ];

  const ownershipTypes = [
    "Self-Owned",
    "Family-Owned",
    "Third Party-Owned",
  ];

  const addCollateral = () => {
    setCollaterals([...collaterals, { type: "", value: "", ownership: "", description: "" }]);
  };

  const updateCollateral = (index, field, value) => {
    const newCollaterals = [...collaterals];
    newCollaterals[index][field] = value;
    setCollaterals(newCollaterals);
  };

  return (
    <>
      {/* <div className="title5">Collateral Details</div> */}
      {collaterals.map((collateral, index) => (
        <div key={index} className="list">
        <div className="row">
            <div className="input2">
                <div className="title5">Type of Collateral</div>
                <select
                className="textfield"
                onChange={(e) => updateCollateral(index, "type", e.target.value)}
                value={collateral.type}
                >
                <option value="">Select Collateral Type</option>
                {collateralTypes.map((type, i) => (
                <option key={i} value={type}>{type}</option>
                ))}
                </select>
            </div>
        </div>
        <div className="row">
            <div className="input2">
                <div className="title5">Value of Collateral</div>
          <input
            className="textfield"
            type="text"
            placeholder="Collateral Value"
            value={collateral.value}
            onChange={(e) => updateCollateral(index, "value", e.target.value)}
          />
          </div>
          </div>
          <div className="row">
            <div className="input2">
                <div className="title5">Type of Ownership</div>
          <select
            className="textfield"
            onChange={(e) => updateCollateral(index, "ownership", e.target.value)}
            value={collateral.ownership}
          >
            <option value="">Select Ownership</option>
            {ownershipTypes.map((type, i) => (
              <option key={i} value={type}>{type}</option>
            ))}
          </select>
          </div>
          </div>
          <div className="row">
            <div className="input2">
                <div className="title5">Description/Address (Optional)</div>
                <input
                    className="textfield"
                    type="text"
                    placeholder="Description/Address (Optional)"
                    value={collateral.description}
                    onChange={(e) => updateCollateral(index, "description", e.target.value)}
                />
          </div>
          </div>
        </div>
      ))}
      <button onClick={addCollateral} className="add-button">Add a Collateral</button>
    </>
  );
};
