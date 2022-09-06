const EntryLog = (props) => {
  const rows = props.vals.map((e, index) => (
    <tr key={index}>
      <td>{e.value}</td>
      <td>{e.date.toLocaleString()}</td>
    </tr>
  ));

  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default EntryLog;
