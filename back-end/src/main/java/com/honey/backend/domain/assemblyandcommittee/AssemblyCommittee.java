package com.honey.backend.domain.assemblyandcommittee;

import com.honey.backend.domain.assembly.Assembly;
import com.honey.backend.domain.committee.Committee;
import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Entity
@Getter
@AllArgsConstructor
@RequiredArgsConstructor
@Transactional
@Table(name = "assembly_committee")
public class AssemblyCommittee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "assembly_cmits")
    private int id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "assembly_id")
    private Assembly assembly;

    @ManyToOne(fetch = FetchType.LAZY, optional = false, cascade = CascadeType.REMOVE)
    @JoinColumn(name = "cmit_id")
    private Committee committee;

    private AssemblyCommittee(Assembly assembly, Committee committee) {
        this.assembly = assembly;
        this.committee = committee;
    }

    public static AssemblyCommittee createAssemAndCmit(Assembly assembly, Committee committee) {
        return new AssemblyCommittee(assembly, committee);
    }
}