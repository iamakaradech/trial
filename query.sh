#!/bin/bash
sqlite3 database/trial.db 'SELECT members.name, (SELECT COUNT(id) FROM car_member WHERE car_member.member_id = members.id) as has_car FROM members'