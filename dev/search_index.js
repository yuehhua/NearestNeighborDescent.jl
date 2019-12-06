var documenterSearchIndex = {"docs":
[{"location":"graphs/#KNN-Graphs-1","page":"KNN Graphs","title":"KNN Graphs","text":"","category":"section"},{"location":"graphs/#","page":"KNN Graphs","title":"KNN Graphs","text":"Approximate KNN Graphs","category":"page"},{"location":"graphs/#Functions-1","page":"KNN Graphs","title":"Functions","text":"","category":"section"},{"location":"graphs/#","page":"KNN Graphs","title":"KNN Graphs","text":"knn_diameter\nknn_matrices\nflag\nweight\nedge_indices\nnode_edge\nnode_edges\nupdate_flag!","category":"page"},{"location":"graphs/#NearestNeighborDescent.KNNGraphs.knn_diameter","page":"KNN Graphs","title":"NearestNeighborDescent.KNNGraphs.knn_diameter","text":"knn_diameter(g::ApproximateKNNGraph{V}, v::V)\n\nCompute the diameter of the ball centered on v that covers all of vs approximate k-nearest neighbors.\n\n\n\n\n\nknn_diameter(graph, v) -> diameter\n\nReturn the diameter of the set of KNNs of vertex v.\n\n\n\n\n\n","category":"function"},{"location":"graphs/#NearestNeighborDescent.KNNGraphs.knn_matrices","page":"KNN Graphs","title":"NearestNeighborDescent.KNNGraphs.knn_matrices","text":"knn_matrices(graph) -> indices, distances\n\nReturn the indices and distances of the approximate KNNs as dense matrices where indices[j, i] and distances[j, i] are the index of and distance to node i's jth nearest neighbor, respectively.\n\n\n\n\n\n","category":"function"},{"location":"graphs/#NearestNeighborDescent.KNNGraphs.edge_indices","page":"KNN Graphs","title":"NearestNeighborDescent.KNNGraphs.edge_indices","text":"edge_indices(graph) -> CartesianIndices\n\nReturn the indices of the KNNs for each node v as tuples (v, i). To be used with node_edge(graph, v, i).\n\n\n\n\n\n","category":"function"},{"location":"graphs/#NearestNeighborDescent.KNNGraphs.node_edge","page":"KNN Graphs","title":"NearestNeighborDescent.KNNGraphs.node_edge","text":"node_edge(graph, v, i) -> edge\n\nReturn the ith outgoing edge from node v. No ordering of the edges is guaranteed; in particular, node_edge(graph, v, 1) is not guaranteed to be the edge to v's nearest neighbor.\n\n\n\n\n\n","category":"function"},{"location":"graphs/#NearestNeighborDescent.KNNGraphs.node_edges","page":"KNN Graphs","title":"NearestNeighborDescent.KNNGraphs.node_edges","text":"node_edges(graph::LockHeapKNNGraph, i) -> edges\n\nReturn all the outgoing edges from node i in an arbitrary order. Thread-safe.\n\n\n\n\n\nnode_edges(graph, v) -> edges\n\nReturn all the outgoing edges from node v in an arbitrary order.\n\n\n\n\n\n","category":"function"},{"location":"graphs/#NearestNeighborDescent.KNNGraphs.update_flag!","page":"KNN Graphs","title":"NearestNeighborDescent.KNNGraphs.update_flag!","text":"update_flag!(g::LockHeapKNNGraph, i, j, flag)\n\nUpdate the flag of the edge at the given indices. Since the flags don't influence the edge ordering, this can't invalidate the heap invariant. Uses locks to ensure thread safety.\n\n\n\n\n\nupdate_flag!(graph, v, i, new_flag)\n\nUpdate the flag of node vs ith outgoing edge. Returns the new edge. Note that since the flags don't influence the edge ordering, this can't invalidate the heap invariant.\n\n\n\n\n\n","category":"function"},{"location":"graphs/#Types-1","page":"KNN Graphs","title":"Types","text":"","category":"section"},{"location":"graphs/#","page":"KNN Graphs","title":"KNN Graphs","text":"ApproximateKNNGraph\nHeapKNNGraph\nLockHeapKNNGraph\nHeapKNNGraphEdge","category":"page"},{"location":"graphs/#NearestNeighborDescent.KNNGraphs.ApproximateKNNGraph","page":"KNN Graphs","title":"NearestNeighborDescent.KNNGraphs.ApproximateKNNGraph","text":"ApproximateKNNGraph{V, K} subtypes are weighted, directed graphs where each vertex has exactly k forward edges.\n\n\n\n\n\n","category":"type"},{"location":"graphs/#NearestNeighborDescent.KNNGraphs.HeapKNNGraph","page":"KNN Graphs","title":"NearestNeighborDescent.KNNGraphs.HeapKNNGraph","text":"HeapKNNGraph{V, K, U}\n\nA weighted, directed graph representing an approximate k-nearest neighbors graph using binary max heaps to store each vertex's forward edges, allowing for efficient updates of the candidate neighbors.\n\n\n\n\n\n","category":"type"},{"location":"graphs/#NearestNeighborDescent.KNNGraphs.LockHeapKNNGraph","page":"KNN Graphs","title":"NearestNeighborDescent.KNNGraphs.LockHeapKNNGraph","text":"LockHeapKNNGraph - uses locks to synchronize the heaps that store the underlying graph edge data. The heaps themselves are not thread-safe.\n\n\n\n\n\n","category":"type"},{"location":"graphs/#NearestNeighborDescent.KNNGraphs.HeapKNNGraphEdge","page":"KNN Graphs","title":"NearestNeighborDescent.KNNGraphs.HeapKNNGraphEdge","text":"HeapKNNGraphEdge{T, U}\n\nA weighted graph edge along with a flag\n\n\n\n\n\n","category":"type"},{"location":"basic/#Basic-Usage-1","page":"Basic Usage","title":"Basic Usage","text":"","category":"section"},{"location":"basic/#","page":"Basic Usage","title":"Basic Usage","text":"Basic usage guide.","category":"page"},{"location":"basic/#Functions-1","page":"Basic Usage","title":"Functions","text":"","category":"section"},{"location":"basic/#","page":"Basic Usage","title":"Basic Usage","text":"```@docs nndescent localjoin! getneighbors! search","category":"page"},{"location":"#NearestNeighborDescent.jl-Documentation-1","page":"Home","title":"NearestNeighborDescent.jl Documentation","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"},{"location":"#Index-1","page":"Home","title":"Index","text":"","category":"section"},{"location":"#","page":"Home","title":"Home","text":"","category":"page"}]
}
