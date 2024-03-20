
const Container = ({children}) => {
  return (
    <div className="card" style={{ width: "55%"}}>
      <div className="card-body py-5">
            {children}
      </div>
    </div>
  );
};

export default Container;
