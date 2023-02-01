/* 
------------------------
Basic Api Context Setup
------------------------
1.Context API: share auth state with other components (accross the application)
2.Create an 'UserContext'
3.Contextprovider with passed cheildred
4.set the 'UserContext' int the index.js (wrapping: <UserContext>App</UserContext>)
5.To consume context: export AuthContext from UserContext.
6.Now at Home or Header or anywhere else): use useContext hook to get the information in the context
 */

/* 
------------------------
Authentication integration
------------------------
1.use getAuth by passing  the app form firebase config.js
2.create a function named "createUser" (2 parameters) to return createUserWithEmailandPassword
3.2.signIns a function named "signIn" (2 parameters) to return signInWithEmailAndPassword
*/
 