package com.RenataLQ.DSMeta.services;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.RenataLQ.DSMeta.entities.Sale;
import com.RenataLQ.DSMeta.repositories.SaleRepository;

@Service
public class SaleService {
	
	@Autowired
	private SaleRepository repository;

	public List<Sale> findSales () {
		return repository.findAll();
	}

}
