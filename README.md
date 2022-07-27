# Wag N' Walk

#### Overview 

__Wag N' Walk__ is a appointment management tool tailored for dog walking businesses.
  - Create , manage , search , and cancel appointments from a single interface. 
  - Access a functional Calendar , which displays all the existing scheduled walks for any given time. 
  - Schedule walks without the worry of accidentally scheduling conflicting appointments

## Pages/Routes
 ***Note*** : each page features a navigation bar , which features links to the main pages

### 1. Home Page
![Admin Portal](https://github.com/nickmendezFlatiron/phase-3-project-frontend/blob/main/src/assets/readme-files/admin-portal.png?raw=true)
  - The Home Page , or Admin Portal , features the various portals accessible by the admin role. 

### 2. Appointments Page
  - The appointments page includes a Calendar view , a Table View , an Appointment Scheduling form, and a search bar.
#### Calendar View
![Calendar View](https://github.com/nickmendezFlatiron/phase-3-project-frontend/blob/main/src/assets/readme-files/calendar.png)
  - The Calendar view neatly displays each appointment according to the date and time the appointment is scheduled. 
  - Use the searchbar to filter through appointments by employee/dog name
#### Edit Appointments View
![Appointments Table View](https://github.com/nickmendezFlatiron/phase-3-project-frontend/blob/main/src/assets/readme-files/edit-appointments.png)
  - The Table view allows the admin to update and delete existing appointments. 
  - Use the searchbar to filter through appointments by employee/dog name

### 3. Dog Portal
![Dog Portal](https://github.com/nickmendezFlatiron/phase-3-project-frontend/blob/main/src/assets/readme-files/dogs-portal.png)
  - Create profiles and access valuable information for each dog. 
  - Click on the appointments link to view all current appointments in the Table view. 

### 4. Employees and Payroll Portal

![Payroll and Employees Portal](https://github.com/nickmendezFlatiron/phase-3-project-frontend/blob/main/src/assets/readme-files/employees-portal.png)
  - Access sensitive employee information and submit a direct deposit payment to any given employee for a pay period.

#### 
#### Installations and Setup 
* Fork and clone 
* Fork and clone the backend as well though the link below
  - https://github.com/nickmendezFlatiron/phase-3-backend
* Open project , run npm install
* Run the following npm commands 
  * npm add bootstrap bootstrap-react
    - if you'd like to customize the Bootstrap Sass files , then install Vanilla Bootstrap
      - npm install bootstrap
  * npm install react-router-dom
  * npm install react-big-calendar react-datepicker date-fns
  * npm i react-uuid
* open another command terminal and access the src file
 - run json-server --watch db.json to setup localhost database
* run npm start


## Contributors
- [Nick Mendez (Me)](https://github.com/nickmendezFlatiron)
### License - 3-Clause BSD License
* Copyright 2022 COPYRIGHT Nicholas Mendez - github: nickmendezFlatiron

* Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

* THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.