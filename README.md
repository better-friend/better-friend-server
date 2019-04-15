# Better-Friends-Server // Back End API Server Documentation 

There are two important databases on the backend that the client will be accessing. **Dates** & **Users**.

## Main Instructions: 

### For Important Dates:

1. Use Axios to retrieve the URL (“[serverURL]/api/dates/:username”). 

2. Note that you can only access the database of **dates** by **username**, and after making a sign-in request to the server. 

3. Use the appropriate Axios package manager CRUD method to access / retrieve / post update / delete the appropriate data.


axios.get(URL/api/dates/:username/) -> returns an array of all important dates, with each date carrying the following data on the body.

```
{
	Id: "",
	Username: "",
    Category: "",
	Date: "",
	Person_Name: "",
 	Relationship: "",
	Description: ""
}
```

axios.get(URL/api/dates/:username/:id) -> returns a date with the id

```
{
	Id: "",
	Username: "",
    Category: "",
	Date: "",
	Person_Name: "",
 	Relationship: "",
	Description: ""
}
```

axios.get(URL/api/dates/:username/:category) -> returns an array of dates with the category Category.

axio.get(URL/api/dates/:username/:relationship) -> returns an array of dates by your relationship with the person

axios.get(URL/api/dates/:username/:person) -> returns the dates corresponding to the person 

axios.post(URL/api/dates/:username, date) -> inserts the date with the following JSON data structure, and returns a JSON object indicating success or error of posting. 

```
{
	Id: "",
	Username: "",
    Category: "",
	Date: "",
	Person_Name: "",
 	Relationship: "",
	Description: ""
}
```


axios.put(URL/api/dates/:username/:id, date) -> retrieve a date with the id, ID, and insert the following JSON object onto date:

```
{
	Id: "",
	Username: "",
    Category: "",
	Date: "",
	Person_Name: "",
 	Relationship: "",
	Description: ""
}
```

Returns a JSON message indicating success or error of updating the ID

axios.delete(URL/api/dates/:username/:id) -> Delete an important date, with the id ID, and returns a JSON message indicating success or error of deleting the date. 


### For Users: 

1. Use Axios to retrieve the URL (“[serverURL]/api/iusers”);
2. Use the appropriate Axios package manager CRUD method to 

#### For registering users: 

axios.post(“[serverURL]/api/iusers”, userInfo) -> Register a user, by sending a JSON object with the fields:

```
{
	username: “”,
	Password: “”
}
```

#### For login with a username and password:

axios.get(“[serverURL]/api/users”, userInfo) -> Log in user, by sending a JSON object with the fields:

```
{
	username: “”,
	Password: “”
}
```

If the **username** and **password** are correct, the server will return a JSON token that allow you access to the dates specific
to each username. 


