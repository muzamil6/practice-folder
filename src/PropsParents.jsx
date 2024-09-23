import React from "react";
import PropsChild from "./PropsChild";

const PropsParents = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
          <tr>
            <td>Value 1</td>
            <td>Value 2</td>
            <td>Value 3</td>
          </tr>
        </tbody>
      </table>
      <div>
        <PropsChild title={"Props come"} />
        {/* <PropsChild title={"another Props"} /> */}
      </div>
    </div>
  );
};

export default PropsParents;
