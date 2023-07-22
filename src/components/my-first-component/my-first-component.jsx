import styles from "./my-first-component.module.css";
import MySecondComponent from "../my-second-compenent/my-second-compenent";
import { PropsComponent } from "../props-component/props-component";

function MyFirstComponent() {
  const parentFirstName = "Varis";
  const person = {
    age: 33,
    height: 182,
  };

  const allProps = {
    firstName: "Varis",
    lastName: "Darasirikul",
    person,
  };

  return (
    <div>
      {/* <MySecondComponent /> */}
      {/* <PropsComponent firstName={parentFirstName} lastName="darasirikul" person={person}/> */}
      <PropsComponent
        {...allProps}
        secondComponent={<MySecondComponent />}
        htmlTag={<p>HTML tag</p>}
      >
        <h2>Thai food 2</h2>
        <h1>Thai food 3</h1>
      </PropsComponent>
    </div>
  );
}

export default MyFirstComponent;
