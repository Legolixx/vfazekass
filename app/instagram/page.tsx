'use client'

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface StringListData {
  href: string;
  value: string;
  timestamp: number;
}

interface User {
  title: string;
  media_list_data: any[];
  string_list_data: StringListData[];
}

export default function Page() {
  const [followers, setFollowers] = useState<User[]>([]);
  const [following, setFollowing] = useState<User[]>([]);
  const [nonFollowbacks, setNonFollowbacks] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const onDrop = (acceptedFiles: File[]) => {
    setLoading(true);
    const fileNames: string[] = [];
    acceptedFiles.forEach((file) => {
      fileNames.push(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        const json = JSON.parse(reader.result as string);
        if (file.name.includes('followers')) {
          setFollowers(json);
        } else if (file.name.includes('following')) {
          setFollowing(json.relationships_following);
        }
      };
      reader.readAsText(file);
    });
    setUploadedFiles(fileNames);
    setLoading(false);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const extractUsernames = (data: User[]): string[] => {
    return data.map(item => item.string_list_data[0].value);
  };

  const findNonFollowbacks = () => {
    setLoading(true);
    const followersUsernames = extractUsernames(followers);
    const followingUsernames = extractUsernames(following);

    const nonFollowbacks = following.filter(user => !followersUsernames.includes(user.string_list_data[0].value));
    setNonFollowbacks(nonFollowbacks);
    setLoading(false);
  };

  return (
    <section className='flex flex-col w-full h-full justify-center items-center p-2 pb-10 lg:pb-14'>
      <div className='flex flex-col lg:flex-row gap-10'>
        <div className='flex flex-col justify-center items-center'>
      <div 
        {...getRootProps()} 
        className={`border-dashed border-2 p-4 w-96 text-center cursor-pointer transition-all duration-200 ${isDragActive ? 'border-blue-500 bg-blue-100' : 'border-gray-500'}`}
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Solte os arquivos aqui...</p>
        ) : (
          <p>Arraste e solte os arquivos aqui, ou clique para selecionar os arquivos</p>
        )}
      </div>

      {uploadedFiles.length > 0 && (
        <div className='mt-4'>
          <h3 className='font-semibold'>Arquivos Carregados:</h3>
          <ul>
            {uploadedFiles.map((file, index) => (
              <li key={index} className='text-gray-700'>{file}</li>
            ))}
          </ul>
        </div>
      )}

      <button 
        onClick={findNonFollowbacks} 
        className='mt-4 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200'
      >
        {loading ? 'Carregando...' : 'Encontrar Não-Seguidores'}
      </button>
      </div>
      <div className='flex h-80 overflow-y-auto'>
        {nonFollowbacks.length > 0 && (
          <div className='flex flex-col h-full overflow-auto'>
            <h2 className='font-bold mb-2'>Usuários que você segue mas não te seguem de volta:</h2>
            <ul className='list-disc list-inside'>
              {nonFollowbacks.map((user, index) => (
                <li key={index} className='mb-1'>
                  <a href={user.string_list_data[0].href} target='_blank' rel='noopener noreferrer' className='text-blue-600 hover:underline'>
                    {user.string_list_data[0].value}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      </div>
    </section>
  );
}
