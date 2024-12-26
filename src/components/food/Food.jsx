import React, { Component } from "react";
import CARS from "../../static";

export default class Food extends Component {
  constructor() {
    super();
    this.state = {
      model: "",
      price: "",
      desc: "",
      marka: "",
      year: "",
      carType: "",
      fuelType: "",
      data: JSON.parse(localStorage.getItem("data")) || [],
      edit: false,
      imageId: null,
    };
  }
  handleDelete = (id) => {
    confirm("Are you sure you want to delete?");
    if (confirm) {
      const store = this.state.data.filter((item) => item.id !== id);
      this.setState({
        data: store,
      });
      localStorage.setItem("data", JSON.stringify(store));
    }
  };

  handleEdit = (id) => {
    const item = this.state.data.find((item) => item.id === id);
    this.setState({ edit: true });
    const store = this.state.data.filter((item) => item.id !== id);
    this.setState({
      model: item.model,
      price: item.price,
      desc: item.desc,
      marka: item.marka,
      year: item.year,
      carType: item.carType,
      fuelType: item.fuelType,
      imageId: item.imageId,
      data: store,
    });
    localStorage.setItem("data", JSON.stringify(store));
  };

  handleSubmit = (e) => {
    this.setState({ edit: false });
    e.preventDefault();
    const { model, price, desc, imageId, marka, year, carType, fuelType } = this.state;
    const store = [
      ...this.state.data,
      {
        id: Date.now(),
        model,
        price,
        desc,
        imageId,
        marka,
        year,
        carType,
        fuelType,
      },
    ];
    this.setState({
      data: store,
      model: "",
      price: "",
      desc: "",
      marka: "",
      year: "",
      carType: "",
      fuelType: "",
      imageId: null,
    });
    localStorage.setItem("data", JSON.stringify(store));
  };

  componentDidUpdate() {
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="flex max-[600px]:flex-col-reverse">
        <div className="w-80 sticky top-0 h-screen max-[600px]:w-screen max-[600px]:h-auto bg-slate-700 p-5">
          <form onSubmit={this.handleSubmit} action="">
            <input
              autoFocus
              required
              value={this.state.marka}
              onChange={(e) => this.setState({ marka: e.target.value })}
              className="w-full h-10 rounded-md mb-3 indent-3 outline-none focus:ring-2 focus:ring-gray-100"
              placeholder="Marka"
              type="text"
            />
            <input
              autoFocus
              required
              value={this.state.model}
              onChange={(e) => this.setState({ model: e.target.value })}
              className="w-full h-10 rounded-md mb-3 indent-3 outline-none focus:ring-2 focus:ring-gray-100"
              placeholder="Model"
              type="text"
            />
            <input
              value={this.state.price}
              required
              onChange={(e) => this.setState({ price: e.target.value })}
              className="w-full h-10 rounded-md mb-3 indent-3 outline-none focus:ring-2 focus:ring-gray-100"
              placeholder="Price"
              type="text"
            />
            <input
              autoFocus
              required
              value={this.state.year}
              onChange={(e) => this.setState({ year: e.target.value })}
              className="w-full h-10 rounded-md mb-3 indent-3 outline-none focus:ring-2 focus:ring-gray-100"
              placeholder="Year"
              type="text"
            />
            <textarea
              value={this.state.desc}
              onChange={(e) => this.setState({ desc: e.target.value })}
              className="w-full h-12 p-1 rounded-md shadow-sm mb-2 outline-none focus:ring-2 focus:ring-gray-100"
              placeholder="Description"
            ></textarea>
            <select
              value={this.state.carType || ""}
              onChange={(e) => this.setState({ carType: e.target.value })}
              className="w-full h-10 rounded-md shadow-sm mb-3 outline-none focus:ring-2 focus:ring-gray-100"
            >
              <option value="" disabled>
                Select Car Type
              </option>
              <option value="mechanic">Mechanic</option>
              <option value="automatic">Automatic</option>
            </select>
            <select
              value={this.state.fuelType || ""}
              onChange={(e) => this.setState({ fuelType: e.target.value })}
              className="w-full h-10  mb-3 rounded-md shadow-sm outline-none focus:ring-2 focus:ring-gray-100"
            >
              <option value="" disabled>
                Select Fuel Type
              </option>
              <option value="gaz">Gaz</option>
              <option value="benzin">Benzin</option>
              <option value="electric">Electric</option>
            </select>
            <select
              required
              value={this.state.imageId || ""}
              onChange={(e) => this.setState({ imageId: e.target.value })}
              className="w-full h-10 rounded-md mb-3 outline-none focus:ring-2 focus:ring-gray-100 indent-3"
            >
              <option value="" disabled>
                Select Image
              </option>
              {CARS.map((image) => (
                <option key={image.id} value={image.id}>
                  {image.title}
                </option>
              ))}
            </select>

            <button className="w-full h-10 bg-slate-200 rounded-md">
              {this.state.edit ? "Edit" : "Create"}
            </button>
          </form>
        </div>
        <div id="create" className="p-5 gap-3 flex flex-wrap flex-1 items-start content-start max-[600px]:grid max-[600px]:grid-cols-2 max-[600px]:gap-3 max-[400px]:grid-cols-1 max-[600px]:mb-96">
          {this.state.data.map((item) => (
            <div
              key={item.id}
              className="w-72 shadow-md max-[600px]:w-full rounded-lg"
            >
              <div className="w-full h-52 bg-slate-300 max-[600px]:h-40 rounded-t-lg">
                <img
                  className="w-full h-full object-cover rounded-t-lg"
                  src={CARS.find((car) => car.id == item.imageId)?.url}
                  alt={item?.title}
                />
              </div>
              <div className="p-4 max-[600px]:p-3">
                <h3 className="text-xl font-medium">
                  <b>Marka</b>: {item.marka}
                </h3>
                <h3 className="text-xl font-medium">
                  <b>Model</b>: {item.model}
                </h3>
                <p className="line-clamp-1">
                  <b>Desc:</b> {item.desc}
                </p>
                <p className="font-medium">
                  <b>Price</b>: {item.price} so'm
                </p>
                <p className="font-medium">
                  <b>Year</b>: {item.year}
                </p>
                <div className="mt-2">
                  <button
                    onClick={() => this.handleDelete(item.id)}
                    className="bg-red-500 px-2 py-1 rounded-md"
                  >
                    Delete
                  </button>
                  <button
                    onClick={() => this.handleEdit(item.id)}
                    className="bg-amber-400 px-2 py-1 rounded-md ml-2"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
