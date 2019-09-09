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
using System.Web.Http.Cors;
using System.Web.Http.Description;
using NotesWEBAPI.Models;

namespace NotesWEBAPI.Controllers
{
    public class RemindersController : ApiController
    {
        private NotesAppDataEntities db = new NotesAppDataEntities();

        // GET: api/Reminders
        public IQueryable<Reminder> GetReminders()
        {
            return db.Reminders;
        }

        // GET: api/Reminders/5
        [ResponseType(typeof(Reminder))]
        public async Task<IHttpActionResult> GetReminder(int id)
        {
            Reminder reminder = await db.Reminders.FindAsync(id);
            if (reminder == null)
            {
                return NotFound();
            }

            return Ok(reminder);
        }

        // PUT: api/Reminders/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutReminder(int id, Reminder reminder)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != reminder.Id)
            {
                return BadRequest();
            }

            db.Entry(reminder).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ReminderExists(id))
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

        // POST: api/Reminders
        [ResponseType(typeof(Reminder))]
        public async Task<IHttpActionResult> PostReminder(Reminder reminder)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Reminders.Add(reminder);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = reminder.Id }, reminder);
        }

        // DELETE: api/Reminders/5
        [ResponseType(typeof(Reminder))]
        public async Task<IHttpActionResult> DeleteReminder(int id)
        {
            Reminder reminder = await db.Reminders.FindAsync(id);
            if (reminder == null)
            {
                return NotFound();
            }

            db.Reminders.Remove(reminder);
            await db.SaveChangesAsync();

            return Ok(reminder);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ReminderExists(int id)
        {
            return db.Reminders.Count(e => e.Id == id) > 0;
        }
    }
}