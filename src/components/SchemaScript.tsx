import React from 'react';

interface SchemaScriptProps {
  schema: Record<string, any> | Record<string, any>[];
}

export const SchemaScript: React.FC<SchemaScriptProps> = ({ schema }) => {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
