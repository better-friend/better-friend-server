# Better-Friends-Server // Back End API Server Documentation 

There are two important databases on the backend that the client will be accessing. **Dates** & **Users**.

# Main Instructions: 

## For Important Dates:

1. Use Axios to retrieve the URL `(“[serverURL]/api/dates/:username”)`. 

2. Note that you can only access the database of **dates** by **username**, and after making a sign-in request to the server. 

3. Use the appropriate Axios package manager CRUD method to access / retrieve / post update / delete the appropriate data.


#### To get all dates for each username, use: `axios.get(URL/api/dates/:username/)` 

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

#### To get a date from the username with the id, use: `axios.get(URL/api/dates/:username/:id)`

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
#### To get an array dates from the username with the category, use: `axios.get(URL/api/dates/:username/:category)`

#### To get an array of dates from the username with the relationship type, use: `axio.get(URL/api/dates/:username/:relationship)` 

#### To get an array of dates from the specific person, use: `axios.get(URL/api/dates/:username/:person)` 

#### To insert a date with the username, with the JSON object date, use: `axios.post(URL/api/dates/:username, date)`

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
#### To update an existing date with the ID id, insert the JSON object date: `axios.put(URL/api/dates/:username/:id, date)` 

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

#### To delete an existing date with the ID id, use:  `axios.delete(URL/api/dates/:username/:id)` 


## For Users: 

1. Use Axios to retrieve the URL `(“[serverURL]/api/iusers”)`;
2. Use the appropriate Axios package manager CRUD method to registering and sign-in. 

### For registering users: 

`axios.post(“[serverURL]/api/iusers”, userInfo)` -> Register a user, by sending a JSON object with the fields:

```
{
	username: “”,
	password: “”
}
```

### For login with a username and password:

`axios.get(“[serverURL]/api/users”, userInfo)` -> Log in user, by sending a JSON object with the fields:

```
{
	username: “”,
	password: “”
}
```

If the **username** and **password** are correct, the server will return a JSON token that allow you access to the dates specific
to each username. 


