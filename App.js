import { useState } from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function MyForm() {

  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <View style={styles.container}>
      <form onSubmit={handleSubmit}>
        <label>Name:
          <input 
            type="text" 
            name="username" 
            value={inputs.username || ""} 
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>Enter your age:
          <input 
            type="number" 
            name="age" 
            value={inputs.age || ""} 
            onChange={handleChange}
          />
        </label>
        <br /><br />
        <label>Email:
        <input 
          type="text" 
          name="email" 
          value={inputs.email || ""} 
          onChange={handleChange}
        />
        </label>
        <br /><br />
        <label>Password:
        <input 
          type="text" 
          name="password" 
          value={inputs.password || ""} 
          onChange={handleChange}
        />
        </label>
        <br /><br />
        <label>Confirm Password:
        <input 
          type="text" 
          name="confirmpassword" 
          value={inputs.confirmpassword || ""} 
          onChange={handleChange}
        />
        </label>
        <br /><br />
        <input type="submit" />
      </form>
    </View> 
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 100,
    alignItems: 'left',
    justifyContent: 'center',
  },
});
