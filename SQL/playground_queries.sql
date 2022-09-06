
/* https://www.pdbmbook.com/playground */

/* Count the ammount of restaurants located in an address with a 'traat' somewhere in its name */
select count(r.id) as Restaurant_Count
from addresses a
inner join restaurants r on r.address_id = a.id
where a.street_name like "%traat%";

/* Select two columns from restaurants located in an address with a 'traat' */
select a.street_name, r.name as restaurant_name
from addresses a
inner join restaurants r on r.address_id = a.id
where a.street_name like "%traat%"
limit 10;

