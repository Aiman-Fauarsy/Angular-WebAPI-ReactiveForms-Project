using NotesWEBAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NotesWEBAPI
{
    public class AuthService
    {

        public static Register RegisterUser(string username, string password)
        {
            using (var db = new NotesAppDataEntities())
            {
                var user = db.Registers.FirstOrDefault(x => x.UserName == username && x.Password == password);
                return user;

            }
        }
    }
}