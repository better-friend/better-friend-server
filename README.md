# Better-Friends-Server // Back End API Server Documentation 

There are two important databases on the backend that the client will be accessing. **Dates** & **Users**.

# Main Instructions: 

## For Important Dates:

1. Use Axios to retrieve the URL `(“[serverURL]/api/dates/:username”)`. 

2. Note that you can only access the database of **dates** by **username**, and after making a sign-in request to the server. 

3. Use the appropriate Axios package manager CRUD method to access / retrieve / post update / delete the appropriate data.

### **Dates Database Schema** 

| **name**     | **type** | **required** |  **description** |
|--------------|----------|--------------|------------------|
|  username    |  string  |     yes      |     username     |
|  category    |  string  |     yes      |     event type   |
|  date        |  string  |     yes      |     event date   |
|  person      |  string  |     yes      |     person       |
|  relationship|  string  |     yes      |     relation to user |
|  description |  string  |     no       |     summary      |
|  sent 	   |  bool    |     yes       |     summary      |

Example of date JSON object:

```
{
	username: "john123",
    category: "Birthday",
	date: "7/7/2017",
	person: "Lucy",
 	relationship: "Sister",
	description: "Purchase painting."
	sent: false
}
```

#### To get all dates by:

* **username**: *Get method*: `axios.get(URL/api/dates/:username/)` 
* **id**: *Get method*: `axios.get(URL/api/dates/:username/:id)`
* **event category** *Get method*: `axios.get(URL/api/dates/:username/:category)`
* **relationship category** *Get method*: `axios.get(URL/api/dates/:username/:relationship)` 
* **person name** *Get method*: `axios.get(URL/api/dates/:username/:person)` 

#### To insert a date with the username, with the JSON object date, use: 

* *Post method*: `axios.post(URL/api/dates/:username, date)`

#### To update an existing date with the ID id, insert the JSON object date, and use: 

* *Put method*: `axios.put(URL/api/dates/:username/:id, date)` 

#### To delete an existing date with the ID id, use: 

* *Delete method*:  `axios.delete(URL/api/dates/:username/:id)` 

## For Users: 

1. Use Axios to retrieve the URL `(“[serverURL]/api/users”)`;
2. Use the appropriate Axios package manager CRUD method to registering and sign-in. 

### **Users Database Schema** 

| **name**     | **type** | **required** |  **description** |
|--------------|----------|--------------|------------------|
|  username    |  string  |     yes      |     username     |
|  password    |  string  |     yes      |     password     |


Example of userInfo JSON object:

```
{
	username: "john123",
	password: "blahblahblah"
}
```

#### For registering users: 

*Post method*: `axios.post(“[serverURL]/api/iusers”, userInfo)` 

#### For login with a username and password:

*Get method*: `axios.get(“[serverURL]/api/users”, userInfo)` 

If the **username** and **password** are correct, the server will return a JSON token that allow you access to the dates link specific to each username. 

## **HTML Status Codes**:

* **400 Status**: Bad request. You are missing a data field. 
* **401 Status**: Not authorized due to lack of username or password.

* **200 Status**: Accepted data creation! 
* **202 Status**: Accepted data request! 

* **500 Status**: Intenal server error.
