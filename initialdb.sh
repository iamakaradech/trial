#!/bin/bash
cat db.sql | sqlite3 ./database/trial.db
