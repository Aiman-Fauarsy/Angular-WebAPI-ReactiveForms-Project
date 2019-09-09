using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using NotesWEBAPI.Models;

namespace NotesWEBAPI.Controllers
{
    public class RegistersController : ApiController
    {
        private NotesAppDataEntities db = new NotesAppDataEntities();

        // GET: api/Registers
        public IQueryable<Register> GetRegisters()
        {
            return db.Registers;
        }

        // GET: api/Registers/5
        [ResponseType(typeof(Register))]
        public async Task<IHttpActionResult> GetRegister(int id)
        {
            Register register = await db.Registers.FindAsync(id);
            if (register == null)
            {
                return NotFound();
            }

            return Ok(register);
        }

        // PUT: api/Registers/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutRegister(int id, Register register)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != register.Id)
            {
                return BadRequest();
            }

            db.Entry(register).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RegisterExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Registers
        [ResponseType(typeof(Register))]
        public async Task<IHttpActionResult> PostRegister(Register register)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Registers.Add(register);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = register.Id }, register);
        }

        // DELETE: api/Registers/5
        [ResponseType(typeof(Register))]
        public async Task<IHttpActionResult> DeleteRegister(int id)
        {
            Register register = await db.Registers.FindAsync(id);
            if (register == null)
            {
                return NotFound();
            }

            db.Registers.Remove(register);
            await db.SaveChangesAsync();

            return Ok(register);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RegisterExists(int id)
        {
            return db.Registers.Count(e => e.Id == id) > 0;
        }
    }
}