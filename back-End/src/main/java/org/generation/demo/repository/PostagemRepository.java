package org.generation.demo.repository;

import java.util.List;

import org.generation.demo.model.postagem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface PostagemRepository extends JpaRepository<postagem, Long> {

	public List<postagem> findAllByTituloContainingIgnoreCase (String titulo);
	
	@Query(value = "select * from postagem where ano > 2011",nativeQuery = true)
	List<postagem>findAllMaior();

	@Query(value = "select * from postagem where ano > 2011 order by ano desc",nativeQuery = true)
	List<postagem>anosDesc();

	@Query(value = "select * from postagem where ano > 2011 order by ano ASC",nativeQuery = true)
	List<postagem>anosAsc();
	
	@Query(value = "select * from postagem where ano >= 2011 and ano <= 2013",nativeQuery = true)
	List<postagem>anosIntervalos();
	
}
