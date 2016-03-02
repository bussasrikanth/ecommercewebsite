angular.module("productCategoryModule")
.factory("productCategoryService",productCategoryService)

productCategoryService.$inject = ['$http'];

function productCategoryService($http) {
	return {
		createProductCategory : function (productCategory) {
			return $http.post('/createProductCategory',
				{
				categoryName : productCategoryName,
				details: productCategory.categoryDetails
				}	
			
			);
		}
	}
}