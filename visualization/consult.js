norCalApp.controller('ConsultNetworkController',['$scope','$resource',
    function($scope,$resource){
 
    console.log('In consult network')
    console.log('inside the script')

  
    var G = new jsnx.Graph();

    G.addWeightedEdgesFrom([[2,3,10]]);
    G.addStar([3,4,5,6], {weight: 5}); 
    G.addStar([2,1,0,-1], {weight: 3});
    console.log(G.nodes())
/*
   jsnx.draw(G, {
        element: '#canvas',  
        weighted: true,
        edgeStyle: {
            'stroke-width': 10
        }
   });
*/
 
    
    /*
    G.add_weighted_edges_from([[2,3,10]]);
    G.add_star([3,4,5,6], {weight: 5}); 
    G.add_star([2,1,0,-1], {weight: 3});
    // Copied from example at http://felix-kling.de/JSNetworkX/examples.html
    jsnx.draw(G, {
        element: '#canvas',  
        weighted: true,
        node_shape: "image",
        node_attr: {
            "xlink:href": "https://github.com/favicon.ico",
            width: 16,
            height: 16,
            x: -8,
            y: -8
        },
        edge_style: {
            'stroke-width': 10
        }
    });
*/
    }])