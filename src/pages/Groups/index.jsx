import Edit from "../../components/Edit";

function Groups() {
  return (
    <>
      <Edit
        type="habit"
        data={{
          description: "descrição",
          title: "Caique",
          id: 10,
          name: "CaiqueGroup",
        }}
      />
    </>
  );
}

export default Groups;
