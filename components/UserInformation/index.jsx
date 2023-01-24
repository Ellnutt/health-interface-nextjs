import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

import mockdata from '../../data/users.json';
const { users } = mockdata;

const defaultUser = {
	id: '0',
	name: '',
	relationship: {
		title: '',
		phone: '',
		email: '',
	},
	doctors: {
		primaryCarePhysician: '',
		specialist: '',
	},
	medications: [''],
	health_issues: [''],
};

function UserInformation() {
	const router = useRouter();
	const [currentUser, setCurrentUser] = useState(defaultUser);

	const getUserInformation = (id) => {
		if (!id) return defaultUser;
		const [user] = users.filter((u) => u.id == id);
		return user ? user : defaultUser;
	};

	useEffect(() => {
		if (!router.isReady) return;
		const { userid } = router.query;
		setCurrentUser(getUserInformation(userid));
	}, [router.isReady, router.query]);

	const { name, relationship, doctors, medications, health_issues } = {
		...(currentUser ?? defaultUser),
	};

	return (
		<div className='container'>
			<div className='section'>
				<h2>Contact Information</h2>
				<p>Name: {name}</p>
				<h2>Relationship </h2>
				<p>{relationship.title}</p>
				<p>Phone: {relationship.phone}</p>
				<p>Email: {relationship.email}</p>
			</div>
			<div className='section'>
				<h2>Doctors</h2>
				<p>Primary Care Physician: {doctors.primaryCarePhysician}</p>
				<p>Specialist: {doctors.specialist}</p>
			</div>
			<div className='section'>
				<h2>Medications</h2>
				<ul>
					{medications.map((medication, idx) => (
						<li key={idx}>{medication}</li>
					))}
				</ul>
			</div>
			<div className='section'>
				<h2>Health Issues</h2>
				<ul>
					{health_issues.map((issue, idx) => (
						<li key={idx}>{issue}</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default UserInformation;
