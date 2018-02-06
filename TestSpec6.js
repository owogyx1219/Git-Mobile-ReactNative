export default function(spec){
	spec.describe('Test transition from repository page to repositories page', function(){
		spec.it('Test transition6', function(){
			await spec.exists('Repository.Header.Body.Title');
			await spec.press('Repository.Header.Left.Button');
			await spec.notExists('Repository.Header.Body.Title');
			await spec.exists('Repositories.Header.Body.Title');
		});
	})

}