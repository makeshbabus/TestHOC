import React from "react";
const Hoc = (WrappedComponent, entity) => {
  return class extends React.Component {
    state = {
      data: [],
      term: "",
    };
    componentDidMount() {
      const fetchData = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        );
        const json = await res.json();
        this.setState({ ...this.state, data: json });
      };
      fetchData();
    }
    render() {
      let { term, data } = this.state;
      let filteredData = data.slice(0, 10).filter((d) => {
        if (entity === "users") {
          const { name } = d;
          console.log(name, "name.indexOf(term):", name.indexOf(term));
          return name.indexOf(term) >= 0;
        }
        if (entity === "todos") {
          const { title } = d;
          return title.indexOf(term) >= 0;
        }
      });
      return (
        <div>
          <h2>{entity} List</h2>
          <div>
            <input
              type="text"
              value={term}
              onChange={(e) =>
                this.setState({ ...this.state, term: e.target.value })
              }
            />
          </div>
          <WrappedComponent data={filteredData}></WrappedComponent>
        </div>
      );
    }
  };
};
export default Hoc;
