import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
	<div className='app__bg app__wrapper section__padding'>
		<div className='app__wrapper_img app__wrapper_img-reverse'>
			<img src={images.chef} alt='chef' />
		</div>

		<div className='app__wrapper_info'>
			<SubHeading title="Chef's Word" />
			<h1 className='headtext__cormorant'>What We Belive In</h1>

			<div className='app__chef-content'>
				<div className='app__chef-content_quote'>
					<img src={images.quote} alt='quote' />
					<p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
				</div>
				<p className='p__opensans'>
					Temporibus amet blanditiis tenetur nulla quibusdam fugiat est explicabo. Et quaerat, nesciunt corporis eveniet
					nemo sunt saepe veniam accusantium pariatur aperiam ex sit neque maxime voluptatem esse dicta? Dolorem
					incidunt quas, minus voluptatibus corrupti ab laborum maiores.
				</p>
			</div>
			<div className='app__chef-sign'>
				<p>Kevin Luo</p>
				<p className='p__opensans'>Chef</p>
				<img src={images.sign} alt='' />
			</div>
		</div>
	</div>
);

export default Chef;
