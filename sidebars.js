module.exports = {
  someSidebar: [
   {
	Introduction: ['Introduction',],
   },
   {
     type: 'category',
     label: 'Sectie I',
     collapsed: true,
     items: [
        'doc1',
        ],
   },
   {
     type: 'category',
     label: 'Sectie II',
     collapsed: true,
      items: [
		'doc2',
    		{
      		type: 'category',
      		label: 'Getting Started',
      		collapsed: true,
      		items: [
			'doc4',
			],
    		},
		'doc3',
		'about/about',
	], 
   },
  ],
};
